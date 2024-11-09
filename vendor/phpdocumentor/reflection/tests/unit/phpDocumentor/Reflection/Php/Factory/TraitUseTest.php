<?php

declare(strict_types=1);

namespace phpDocumentor\Reflection\Php\Factory;

use InvalidArgumentException;
use phpDocumentor\Reflection\Element;
use phpDocumentor\Reflection\Fqsen;
use phpDocumentor\Reflection\Php\Class_ as Class_Element;
use phpDocumentor\Reflection\Php\Enum_ as Enum_Element;
use phpDocumentor\Reflection\Php\Interface_;
use phpDocumentor\Reflection\Php\ProjectFactoryStrategies;
use phpDocumentor\Reflection\Php\Trait_ as Trait_Element;
use PhpParser\Node\Name\FullyQualified;
use PhpParser\Node\Stmt\TraitUse as TraitUseNode;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\DataProvider;

#[CoversClass(TraitUse::class)]
#[CoversClass(AbstractFactory::class)]
final class TraitUseTest extends TestCase
{
    /** @return mixed[][] */
    public static function consumerProvider(): array
    {
        return [
            [new Class_Element(new Fqsen('\MyClass'))],
            [new Trait_Element(new Fqsen('\MyTrait'))],
            [new Enum_Element(new Fqsen('\MyEnum'), null)],
        ];
    }

    protected function setUp(): void
    {
        $this->fixture = new TraitUse();
    }

    public function testMatchesOnlyTraitUseNode(): void
    {
        self::assertTrue(
            $this->fixture->matches(
                self::createContext(),
                $this->givenTraitUse(),
            ),
        );
    }

    public function testCreateThrowsExceptionWhenStackDoesNotContainClass(): void
    {
        $this->expectException(InvalidArgumentException::class);

        $context = self::createContext()->push(new Interface_(new Fqsen('\Interface')));
        $this->fixture->create($context, $this->givenTraitUse(), new ProjectFactoryStrategies([]));
    }

    /** @param Class_Element|Trait_Element $traitConsumer */
    #[DataProvider('consumerProvider')]
    public function testCreateWillAddUsedTraitToContextTop(Element $traitConsumer): void
    {
        $context = self::createContext()->push($traitConsumer);
        $this->fixture->create($context, $this->givenTraitUse(), new ProjectFactoryStrategies([]));

        self::assertEquals(['\Foo' => new Fqsen('\Foo')], $traitConsumer->getUsedTraits());
    }

    private function givenTraitUse(): TraitUseNode
    {
        return new TraitUseNode([new FullyQualified('Foo')]);
    }
}
